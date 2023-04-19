interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  startBet(): string;
  getCoupon(name: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const femi: Admin = {
  role: "admin",
  dbId: 22,
  email: "",
  githubToken: "github",
  userId: 123,
  startTrail: () => {
    return "FALASE";
  },
  startBet() {
    return "femi";
  },
  getCoupon(name: "femiw") {
    return 120;
  },
};
