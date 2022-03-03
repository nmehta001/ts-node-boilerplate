export class NotFoundError extends Error {
  constructor(id: string, message?: string) {
    const msg = message ?? "Entity not found";

    super(`${msg}: ${id}`);
    this.name = this.constructor.name;
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super("ForbiddenError");

    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
