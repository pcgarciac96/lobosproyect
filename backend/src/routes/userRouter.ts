import { Router } from "express";
import controller from "../controllers/authController";
const router = Router();


router.route("/login").post(controller.login);
router.route("/users").post(controller.addUser);
router.route("/getUser/:id").get(controller.getUser);
router.route("/addPokemon/:id").put(controller.addPokemon);
export default router;
