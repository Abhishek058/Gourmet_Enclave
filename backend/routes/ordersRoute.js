import express, { request, response } from "express";
import { Orders } from "../models/orderModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.personCount ||
      !request.body.date ||
      !request.body.timeSlot ||
      !request.body.phone
    ) {
      return response.status(400).send({
        message: "Send all requied fields",
      });
    }

    const newOrder = {
      personCount: request.body.personCount,
      date: request.body.date,
      timeSlot: request.body.timeSlot,
      phone: request.body.phone,
    };

    const order = await Orders.create(newOrder);

    return response.status(201).send(order);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
  }
});

// router.get("/", async (request, response) => {
//   try {
//     const order = await Orders.find();
//     return response.status(200).json({
//       data: order,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/:phone", async (request, response) => {
  try {
    const { phone } = request.params;
    const order = await Orders.findOne({ phone });
    if (!order) {
      return response.status(404).json({ message: "Order not found" });
    }
    return response.status(200).json({
      data: order,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Orders.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Order not found" });
    }

    return response.status(204).json({ message: "Booking Cancelled" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
});

export default router;
