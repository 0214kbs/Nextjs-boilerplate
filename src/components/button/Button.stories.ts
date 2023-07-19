import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "버튼 컴포넌트 안에 표시되는 문자",
    },
    color: {
      description: "글자색 설정",
    },
    bgcolor: {
      description: "배경색 설정",
    },
    onClick: {
      description: "버튼 클릭 시 실행되는 이벤트",
    },
    type: {
      description: "버튼의 동작 유형 선택",
      options: ["button", "submit", "reset"],
      control: { type: "radio" },
    },
  },
  args: {
    color: "white",
    label: "Button",
    type: "button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicButton: Story = {
  args: {
  },
};

export const ChangeColorButton: Story = {
  args: {
    bgcolor: "#BB2649"
  },
};