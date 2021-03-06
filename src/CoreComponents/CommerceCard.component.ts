import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';

interface CommerceCardElementPropsType {
  description: string;
  price: number;
  currency: string;
  discount?: number;
  discountRate?: number;
  discountedPrice?: number;
  thumbnails: ThumbnailType[];
  buttons: ButtonType[];
}

export type CommerceCardType = ChatElement<CommerceCardElementPropsType>;

export interface CommerceCardParameter {
  description: string;
  price: number;
  currency: string;
  discount?: number;
  discountRate?: number;
  discountedPrice?: number;
  thumbnails: ThumbnailType[];
  buttons: ButtonType[];
}

export function CommerceCard({
  description,
  price,
  currency,
  discount,
  discountRate,
  discountedPrice,
  thumbnails,
  buttons,
}: CommerceCardParameter): CommerceCardType {
  return new ChatElement('commerceCard', {
    description,
    price,
    currency,
    discount,
    discountRate,
    discountedPrice,
    thumbnails,
    buttons,
  });
}
