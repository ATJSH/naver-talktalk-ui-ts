import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CarouselType } from './Carousel.component';
import { CommerceCardType } from './CommerceCard.component';
import { SimpleImageType } from './SimpleImage.component';
import { SimpleTextType } from './SimpleText.component';

interface OutputElementPropsType {
  [chatElementName: string]: BasicCardType | CommerceCardType | CarouselType | SimpleTextType | SimpleImageType;
}

export type OutputType = ChatElement<OutputElementPropsType>;

export interface OutputParameter {
  content: BasicCardType | CommerceCardType | CarouselType | SimpleTextType | SimpleImageType;
}

export function Output({ content }: OutputParameter): OutputType {
  return new ChatElement('output', {
    [content.name]: content,
  });
}
