import { Component, CSSProperties, ReactNode, createElement } from "react";
import EmojiPickerReact, {
    EmojiStyle,
    SkinTonePickerLocation,
    SkinTones,
    SuggestionMode,
    Theme,
    type EmojiClickData
} from "emoji-picker-react";

import "../ui/EmojiPicker.css";

export type PreviewConfig = {
    defaultEmoji?: string;
    defaultCaption?: string;
    showPreview?: boolean;
};

export interface EmojiPickerComponentProps {
    openValue: boolean;
    autoFocusSearch: boolean;
    ThemeValue: Theme;
    emojiStyleValue: EmojiStyle;
    defaultSkinTone: SkinTones;
    lazyLoadEmojis: boolean;
    PreviewConfig: PreviewConfig;
    searchPlaceholder: string;
    suggestedEmojisMode: SuggestionMode;
    skinTonesDisabled: boolean;
    searchDisabled: boolean;
    skinTonePickerLocation: SkinTonePickerLocation;
    emojiVersion: string | null;
    className?: string;
    widthValue: string | number;
    heightValue: string | number;
    hiddenEmojisValue: string[];
    reactionsDefaultOpenValue: boolean;
    allowExpandReactions: boolean;
    style?: CSSProperties;
    onEmojiClick: (clicked: boolean, data: string) => void;
    onSkinToneChange: (changed: boolean, data: string) => void;
}

export class EmojiPickerComponent extends Component<EmojiPickerComponentProps> {
    render(): ReactNode {
        return (
            <div>
                <EmojiPickerReact
                    open={this.props.openValue}
                    autoFocusSearch={this.props.autoFocusSearch}
                    theme={this.props.ThemeValue}
                    emojiStyle={this.props.emojiStyleValue}
                    defaultSkinTone={this.props.defaultSkinTone}
                    lazyLoadEmojis={this.props.lazyLoadEmojis}
                    previewConfig={this.props.PreviewConfig}
                    searchPlaceHolder={this.props.searchPlaceholder}
                    suggestedEmojisMode={this.props.suggestedEmojisMode}
                    skinTonesDisabled={this.props.skinTonesDisabled}
                    searchDisabled={this.props.searchDisabled}
                    skinTonePickerLocation={this.props.skinTonePickerLocation}
                    emojiVersion={this.props.emojiVersion}
                    className={this.props.className}
                    width={this.props.widthValue}
                    height={this.props.heightValue}
                    hiddenEmojis={this.props.hiddenEmojisValue}
                    reactionsDefaultOpen={this.props.reactionsDefaultOpenValue}
                    allowExpandReactions={this.props.allowExpandReactions}
                    style={this.props.style}
                    onSkinToneChange={(skinTone: SkinTones) => {
                        this.props.onSkinToneChange(true, JSON.stringify(skinTone));
                    }}
                    onEmojiClick={(emoji: EmojiClickData) => {
                        this.props.onEmojiClick(true, JSON.stringify(emoji));
                    }}
                />
            </div>
        );
    }
}
