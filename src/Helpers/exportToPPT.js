import pptxgen from "pptxgenjs";

export const exportToPPT = (header, data, fileName) => {
  let pres = new pptxgen();
  let slide = pres.addSlide();
  const slideHeader = header;
  const slideData = { data };
  slide.addText(slideHeader, slideData);
  return pres.writeFile(fileName);
};
