import { useState } from "react";
import { GetDetailRepo } from "../services/GetDetailRepo";
export const useDetailRepo = () => {
  const [expandedCard, setExpandedCard] = useState<Record<string, boolean>>({});

  const { queryResponseDetailRepo } = GetDetailRepo({
    onSuccess: () => {},
    onError: () => {},
  });

  const handleExpandClick = async (login: string, reposUrl: string) => {
    setExpandedCard((prev) => ({
      ...prev,
      [login]: !prev[login], // Toggle the specific card's expanded state
    }));

    await queryResponseDetailRepo?.mutateAsync({
      url: reposUrl,
    });
  };

  return {
    queryResponseDetailRepo,
    handleExpandClick,
    expandedCard,
  };
};
