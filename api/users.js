import express from "express";
const router = express.Router();
export default router;
//Jon - code below
// import { createUser, getUserByUsernameAndPassword } from "#db/queries/users";
// import requireBody from "#middleware/requireBody";
// import { createToken } from "#utils/jwt";
 //Jodson - added imports for user role management and delete user functionality
import db from "#db/client";
import { 
  createUser, 
  getUserByUsernameAndPassword,
  updateUserRole,
  deleteUser 
} from "#db/queries/users";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";

// Jodson - added role_id to user registration for role-based access control/ middleware that validates the request before it reaches your code.
router
  .route("/register")
  .post(requireBody(["username", "password", "role_id"]), async (req, res) => {
    const { username, password, role_id } = req.body;
    
    const user = await createUser({ 
      email: username,
      password: password,
      role_id: role_id //Jodson - Reason for role_id addition: To assign roles during user registration
    });

    const token = await createToken({ id: user.id, role_id: user.role_id });
    res.status(201).json({ token });
  });

router
  .route("/register/admin")
  .post(
    requireAuth,
    requireRole([1]),
    requireBody(["email", "password", "role_id"]),
    async (req, res) => {
      const { email, password, role_id } = req.body;

      if (!Number.isInteger(role_id) || role_id < 1 || role_id > 4) {
        return res.status(400).json({
          error: "Invalid role_id",
          message: "role_id must be an integer between 1 and 4",
        });
      }

      const user = await createUser({ email, password, role_id });

      res.status(201).json({
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
          role_id: user.role_id,
        },
      });
    }
  );

router
  .route("/login")
  .post(requireBody(["email", "password"]), async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByUsernameAndPassword(email, password);
    if (!user)
      return res.status(401).json({
        error: "Invalid credentials",
        message: "Invalid email or password",
      });

    const token = await createToken({ id: user.id, role_id: user.role_id });
    res.json({ token });
  });

  // Get all users - for admin panel
router.route("/").get(async (req, res) => {
  // TODO: Add authentication middleware to verify admin/manager
  try {
    const sql = `
      SELECT id, email, role_id
      FROM users
      ORDER BY id
    `;
    const { rows } = await db.query(sql);
    res.json(rows);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

// UPDATE user role (PUT) / Jodson - for role management
router.route("/:id/role").put(async (req, res) => {
  const { role_id } = req.body;
  const userId = req.params.id;
  
  const updatedUser = await updateUserRole(userId, role_id);
  res.json(updatedUser);
});
//Jodson - added delete user route for admin panel
// DELETE user (DELETE)
router.route("/:id").delete(async (req, res) => {
  const userId = req.params.id;
  await deleteUser(userId);
  res.send("User deleted successfully");
});
