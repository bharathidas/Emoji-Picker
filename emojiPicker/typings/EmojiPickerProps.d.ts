/**
 * This file was generated from EmojiPicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface EmojiPickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    openKey?: EditableValue<boolean>;
    emojiStyleKey?: EditableValue<string>;
    defaultSkinToneKey?: EditableValue<string>;
    lazyLoadEmojisKey?: EditableValue<boolean>;
    hiddenEmojisKey?: EditableValue<string>;
    emojiVersionKey?: EditableValue<string>;
    autoFocusSearchKey?: EditableValue<boolean>;
    ThemeKey?: EditableValue<string>;
    classNameKey?: EditableValue<string>;
    widthKey?: EditableValue<string | Big>;
    heightKey?: EditableValue<string | Big>;
    skinTonesDisabledKey?: EditableValue<boolean>;
    skinTonePickerLocationKey?: EditableValue<string>;
    suggestedEmojisModeKey?: EditableValue<string>;
    reactionsDefaultOpenKey?: EditableValue<boolean>;
    allowExpandReactionsKey?: EditableValue<boolean>;
    searchPlaceholderKey?: EditableValue<string>;
    searchDisabledKey?: EditableValue<boolean>;
    onEmojiClick?: ActionValue;
    onEmojiClickedDataKey?: EditableValue<string>;
    onSkinToneChange?: ActionValue;
    onSkinToneChangedDataKey?: EditableValue<string>;
    previewConfigKey?: EditableValue<boolean>;
    defaultEmojiKey?: EditableValue<string>;
    defaultCaptionKey?: EditableValue<string>;
    showPreviewKey?: EditableValue<boolean>;
}

export interface EmojiPickerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    openKey: string;
    emojiStyleKey: string;
    defaultSkinToneKey: string;
    lazyLoadEmojisKey: string;
    hiddenEmojisKey: string;
    emojiVersionKey: string;
    autoFocusSearchKey: string;
    ThemeKey: string;
    classNameKey: string;
    widthKey: string;
    heightKey: string;
    skinTonesDisabledKey: string;
    skinTonePickerLocationKey: string;
    suggestedEmojisModeKey: string;
    reactionsDefaultOpenKey: string;
    allowExpandReactionsKey: string;
    searchPlaceholderKey: string;
    searchDisabledKey: string;
    onEmojiClick: {} | null;
    onEmojiClickedDataKey: string;
    onSkinToneChange: {} | null;
    onSkinToneChangedDataKey: string;
    previewConfigKey: string;
    defaultEmojiKey: string;
    defaultCaptionKey: string;
    showPreviewKey: string;
}
