import React from "react";

import ArcadeIcon from "@assets/images/icon-arcade.svg";
import AdvancedIcon from "@assets/images/icon-Advanced.svg";
import ProIcon from "@assets/images/icon-pro.svg";

export type PlanListTypes = {
  key: string;
  name: string;
  price: number;
  free: number;
  icon: any;
};

type ListTypes = {
  label: string;
  name: string;
  price: number;
  description?: string;
};

export const planList: PlanListTypes[] = [
  { name: "Arcade", icon: <ArcadeIcon />, price: 9, key: "arcade", free: 2 },
  {
    name: "Advanced",
    icon: <AdvancedIcon />,
    price: 12,
    key: "advanced",
    free: 2,
  },
  { name: "Pro", icon: <ProIcon />, price: 15, key: "pro", free: 2 },
];

export const addList: ListTypes[] = [
  {
    label: "Online service",
    description: "Access to multiplayer games",
    price: 1,
    name: "online_service",
  },
  {
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    name: "larger_storage",
  },
  {
    label: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
    name: "customizable_profile",
  },
];

export const calculatePrice = (
  price: number,
  discount: number,
  isYearly: boolean
): number => {
  let result = price;
  if (isYearly) {
    result *= 12 - discount;
  }

  return result;
};
