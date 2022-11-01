interface ControlType {
  name: string;
  type: string;
  inputs: { name: string; inpuType: string }[];
}

export const Controls_UI: ControlType[] = [
  {
    name: "Resize",
    type: "Size",
    inputs: [
      { name: "width", inpuType: "number" },
      { name: "height", inpuType: "number" },
    ],
  },
  {
    name: "Crop",
    type: "Size",
    inputs: [
      { name: "width", inpuType: "number" },
      { name: "height", inpuType: "number" },
    ],
  },
  {
    name: "Rotate",
    type: "Size",
    inputs: [{ name: "angle", inpuType: "number" }],
  },
  {
    name: "Flip",
    type: "Size",
    inputs: [{ name: "direction", inpuType: "string" }],
  },
  {
    name: "Brightness",
    type: "Exposure",
    inputs: [{ name: "brightness", inpuType: "number" }],
  },
  {
    name: "Contrast",
    type: "Exposure",
    inputs: [{ name: "contrast", inpuType: "number" }],
  },
  {
    name: "Saturation",
    type: "Exposure",
    inputs: [{ name: "saturation", inpuType: "number" }],
  },
  {
    name: "Sharpen",
    type: "Exposure",
    inputs: [{ name: "sharpen", inpuType: "number" }],
  },
  {
    name: "Blur",
    type: "Effects",
    inputs: [{ name: "blur", inpuType: "number" }],
  },
];
