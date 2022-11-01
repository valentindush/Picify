export class Image {
  private dimensions: { width: number; height: number };
  private rounded: number = 0;
  private flip: string = "up";
  private rotate: number = 0;

  private brightness: number = 50;
  private contrast: number = 50;
  private saturation: number = 50;
  private sharpen: number = 50;

  private blur: number = 0;

  private name: string;

  //Constructor
  constructor(name: string, dimensions: { width: number; height: number }) {
    this.name = name;
    this.dimensions = dimensions;
  }

  //getters and setters

  public getName = () => {
    return this.name;
  };

  public setName = (name: string) => {
    this.name = name;
  };

  public getDimensions = () => {
    return this.dimensions;
  };
  public setDimesions = (dimensions: { width: number; height: number }) => {
    this.dimensions = dimensions;
  };
  public getRounded = () => {
    return this.rounded;
  };
  public setRounded = (rounded: number) => {
    this.rounded = rounded;
  };

  public getFlip = () => {
    return this.flip;
  };
  public setFlip = (flip: string) => {
    this.flip = flip;
  };

  public getRotate = () => {
    return this.rotate;
  };
  public setRotate = (rotate: number) => {
    this.rotate = rotate;
  };

  public getBrightness = () => {
    return this.brightness;
  };
  public setBrightness = (brightness: number) => {
    this.brightness = brightness;
  };

  public getContrast = () => {
    return this.contrast;
  };
  public setContrast = (contrast: number) => {
    this.contrast = contrast;
  };

  public getSaturation = () => {
    return this.saturation;
  };
  public setSaturation = (saturation: number) => {
    this.saturation = saturation;
  };

  public getSharpen = () => {
    return this.sharpen;
  };
  public setSharpen = (sharpen: number) => {
    this.sharpen = sharpen;
  };

  public getBlur = () => {
    return this.blur;
  };
  public setBlur = (blur: number) => {
    this.blur = blur;
  };

  //methods

  public exportImage = (callback: Function) => {
    callback();
  };
}
