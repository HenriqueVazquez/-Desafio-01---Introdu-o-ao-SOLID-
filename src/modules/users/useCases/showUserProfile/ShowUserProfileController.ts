import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const users = this.showUserProfileUseCase.execute({
        user_id: String(user_id),
      });
      return response.json(users);
    } catch (error) {
      console.log(error.message);
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
