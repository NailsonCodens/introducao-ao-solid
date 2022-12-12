import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;
    const turnUserAdmin = this.turnUserAdminUseCase.execute(user_id);

    return response.status(201).json({ turnUserAdmin });
  }
}

export { TurnUserAdminController };
