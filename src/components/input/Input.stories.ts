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
    use: {
      options: ["basic", "error", "warn", "success", "disable"],
      defaultValue: { summary: "basic" },
      control: { type: "radio" },
      description: "각 상황에 따라 표시할 유형",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
  args: {
    placeholder: "Input box",
  },
};

export const WarnInput: Story = {
  args: {
    placeholder: "Input box",
    use: "warn",
  },
};

export const ErrorInput: Story = {
  args: {
    placeholder: "Input box",
    use: "error",
  },
};

export const SuccessInput: Story = {
  args: {
    placeholder: "Input box",
    use: "success",
  },
};

export const DisableInput: Story = {
  args: {
    placeholder: "Input box",
    use: "disable",
  },
};
