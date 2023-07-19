import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "입력 필드에 표시되는 텍스트",
    },
    name: {
      defaultValue: { summary: "Basic Input" },
      description: "입력 필드의 이름(식별자)",
    },
  },
  args: {
    placeholder: "Input box",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
  args: {
  },
};

export const ChangeColorInput: Story = {
  args: {
    color: "#BB2649"
  },
};
