const alternatingSums = (
  myLeft: number,
  myRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean => {
  const myWeakest = myLeft <= myRight ? myLeft : myRight;
  const myStrongest = myLeft >= myRight ? myLeft : myRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return myStrongest === friendsStrongest && myWeakest === friendsWeakest;
};

console.log(alternatingSums(10, 15, 15, 10));
console.log(alternatingSums(15, 10, 15, 10));
console.log(alternatingSums(15, 10, 15, 9));
