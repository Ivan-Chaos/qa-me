import { Center } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface StatusComponentProps {
  status: string;
}

const StatusComponent: FunctionComponent<StatusComponentProps> = ({
  status,
}) => {
  const statuses = [
    { code: "APPLIED", status: "applied", color: "rgb(139, 97, 255)" },
    { code: "NEW", status: "new", color: "rgb(68, 252, 213)" },
    { code: "ONGOING", status: "ongoing", color: "pink.400" },
    {
      code: "RESULT_SUBMITTED",
      status: "result submitted",
      color: "rgb(242, 133, 7)",
    },
    {
      code: "RESULT_VERIFIED",
      status: "result verified",
      color: "rgb(32, 143, 4)",
    },
    { code: "AWARD_SENT", status: "award sent", color: "rgb(171, 10, 133)" },
    {
      code: "AWARD_RECEIVED",
      status: "award received",
      color: "rgb(56, 138, 107)",
    },
    {
      code: "RESULT_REJECTED",
      status: "Result rejected",
      color: "rgb(235, 20, 5)",
    },
  ];

  return (
    <Center
      textTransform={"uppercase"}
      color={statuses.find((e) => e.code === status)?.color}
      border={"1px solid"}
      borderColor={statuses.find((e) => e.code === status)?.color}
      fontWeight={600}
      fontSize={"lg"}
      borderRadius={"0.5rem"}
      px={"2rem"}
      w={"auto"}
    >
      {statuses.find((e) => e.code === status)?.status}
    </Center>
  );
};

export default StatusComponent;
