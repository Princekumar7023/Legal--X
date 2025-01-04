// senderId  String
//   receiverId String
//   message   String
//   createdAt DateTime? @default(now())

export type Message = {
  senderId: string;
  receiverId: string;
  message: string;
  createdAt?: Date;
};

export type UserData = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddress: string;
  imageUrl: string;
};
