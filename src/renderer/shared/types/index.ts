import React from 'react';

export interface IMainState {
  chat: IChatBubble[];
  user_details: IUserDetails;
  mode: TAppearanceMode;
}

export interface IChatHead {
  id: number;
  name: string;
  lastMessage: string;
  profileImage: string;
  phone: string;
}

export interface IChatBubble {
  message: string;
  time: string;
  user_id: number;
  id: number;
  conversation_id: number;
}

export interface IUserDetails {
  id: number;
  name: string;
  phone_number: string;
  profile_image: string;
}

export interface IListItem {
  icon?: any;
  title: string;
  isRoute?: boolean;
  info?: string;
  style?: React.CSSProperties;
  route?: string;
  className?: string;
}

export type TAppearanceMode = 'light' | 'dark';
