import { AvatarGroup, Avatar } from "@chakra-ui/react";
import { FunctionComponent } from "react";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://m.media-amazon.com/images/M/MV5BZGRjZTczNWItMDk3NS00YmI0LTlmOTktYTQ4ZWQ1MzI1NmRhXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_.jpg",
  },
  {
    name: "Segun Adebayo",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtN2qmjukovXNGCxQQ0th1lcY00r3FdEAyYFAFfUWaWJ5Vt1aqK9TXxV348_HVDhHuuo&usqp=CAU",
  },
  {
    name: "Kent Dodds",
    url: "https://www.themoviedb.org/t/p/w500/quvd24V0f6UxYlMDxxU2P4T2YtG.jpg",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://yt3.googleusercontent.com/ytc/AL5GRJWQoMnDl5XwZMpcLmU6yD1JjEm-uj5pTERl7vDT6w=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Christian Nwamba",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3dvEqYpMmvEkbICApAeZbQuPFCZauzH0Zw&usqp=CAU",
  },
];

const TesterMockupGroup: FunctionComponent = () => {
  return (
    <AvatarGroup>
      {avatars.map((avatar) => (
        <Avatar
          key={avatar.name}
          name={avatar.name}
          src={avatar.url}
          size={{ base: "md", md: "lg" }}
          position={"relative"}
          zIndex={2}
          _before={{
            content: '""',
            width: "full",
            height: "full",
            rounded: "full",
            transform: "scale(1.125)",
            bgGradient: "linear(to-bl, red.400,pink.400)",
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
      ))}
    </AvatarGroup>
  );
};

export default TesterMockupGroup;
