import { Component, CSSProperties, ReactNode, createElement } from "react";
import { Big } from "big.js";
import { EmojiStyle, SkinTonePickerLocation, SkinTones, SuggestionMode, Theme } from "emoji-picker-react";

import { EmojiPickerContainerProps } from "../typings/EmojiPickerProps";
import { EmojiPickerComponent, type PreviewConfig } from "./components/EmojiPickerComponent";
import "./ui/EmojiPicker.css";

export class EmojiPicker extends Component<EmojiPickerContainerProps> {
    private readonly onEmojiClickHandle = this.onEmojiClick.bind(this);
    private readonly onSkinToneChangeHandle = this.onSkinToneChange.bind(this);

    private readonly convertStringToArray = (input: string): string[] => {
        return input.split(",");
    };

    private readonly convertStringToThemeExport = (input: string): Theme => {
        let themeInput = "light";
        if (input) {
            themeInput = input.toLowerCase();
        }
        if (themeInput === "auto") {
            return Theme.AUTO;
        }
        if (themeInput === "dark") {
            return Theme.DARK;
        }
        return Theme.LIGHT;
    };

    private readonly convertStringToemojiStyle = (input: string): EmojiStyle => {
        let emojiStyleInput = "apple";
        if (input) {
            emojiStyleInput = input.toLowerCase();
        }
        if (emojiStyleInput === "google") {
            return EmojiStyle.GOOGLE;
        }
        if (emojiStyleInput === "facebook") {
            return EmojiStyle.FACEBOOK;
        }
        if (emojiStyleInput === "twitter") {
            return EmojiStyle.TWITTER;
        }
        if (emojiStyleInput === "native") {
            return EmojiStyle.NATIVE;
        }
        return EmojiStyle.APPLE;
    };

    private readonly convertStringToskinTonePickerLocation = (input: string): SkinTonePickerLocation => {
        let locationInput = "Search";
        if (input) {
            locationInput = input.toLowerCase();
        }
        if (locationInput === "preview") {
            return SkinTonePickerLocation.PREVIEW;
        }
        return SkinTonePickerLocation.SEARCH;
    };

    private readonly convertStringTosuggestedEmojisMode = (input: string): SuggestionMode => {
        let modeInput = "frequent";
        if (input) {
            modeInput = input.toLowerCase();
        }
        if (modeInput === "recent") {
            return SuggestionMode.RECENT;
        }
        return SuggestionMode.FREQUENT;
    };

    private readonly convertStringTodefaultSkinTone = (input: string): SkinTones => {
        let toneInput = "neutral";
        if (input) {
            toneInput = input.toLowerCase();
        }
        if (toneInput === "light") {
            return SkinTones.LIGHT;
        }
        if (toneInput === "medium light") {
            return SkinTones.MEDIUM_LIGHT;
        }
        if (toneInput === "medium") {
            return SkinTones.MEDIUM;
        }
        if (toneInput === "medium dark") {
            return SkinTones.MEDIUM_DARK;
        }
        if (toneInput === "dark") {
            return SkinTones.DARK;
        }
        return SkinTones.NEUTRAL;
    };

    private convertStringToPreviewConfig(input: boolean): PreviewConfig {
        let showpreview = true;
        if (this.props.showPreviewKey?.value !== undefined) {
            showpreview = this.props.showPreviewKey.value;
        }
        let value: PreviewConfig = {
            defaultEmoji: "1f60a",
            defaultCaption: "What's your mood?",
            showPreview: showpreview
        };
        if (input) {
            const defaultEmoji = this.props.defaultEmojiKey?.value;
            const defaultCaption = this.props.defaultCaptionKey?.value;
            const showPreview = this.props.showPreviewKey?.value;
            if (defaultEmoji && defaultCaption && showPreview !== undefined) {
                value = {
                    defaultEmoji,
                    defaultCaption,
                    showPreview
                };
            }
        }
        return value;
    }

    private convertWidthValue(widthValue: string | Big | number | undefined): string | number {
        if (typeof widthValue === "string" || typeof widthValue === "number") {
            return widthValue;
        }
        if (widthValue instanceof Big) {
            return Number(widthValue.toString());
        }
        return 350;
    }

    render(): ReactNode {
        let openValue = true;
        if (this.props.openKey?.value !== undefined) {
            openValue = this.props.openKey.value;
        }

        let autoFocusSearchValue = true;
        if (this.props.autoFocusSearchKey?.value !== undefined) {
            autoFocusSearchValue = this.props.autoFocusSearchKey.value;
        }

        const themeValue = this.props.ThemeKey?.value || "light";
        const emojiStyleValue = this.props.emojiStyleKey?.value || "apple";
        const defaultSkinToneValue = this.props.defaultSkinToneKey?.value || "neutral";
        const lazyLoadEmojisValue = this.props.lazyLoadEmojisKey?.value || false;
        const previewConfig = this.props.previewConfigKey?.value || false;
        const searchPlaceholderValue = this.props.searchPlaceholderKey?.value || "Search";
        const suggestedEmojisModeValue = this.props.suggestedEmojisModeKey?.value || "frequent";
        const skinTonesDisabled = this.props.skinTonesDisabledKey?.value || false;
        const searchDisabled = this.props.searchDisabledKey?.value || false;
        const skinTonePickerLocation = this.props.skinTonePickerLocationKey?.value || "Search";
        const emojiVersion = this.props.emojiVersionKey?.value || null;
        const ClassName = this.props.classNameKey?.value;
        const widthValue = this.props.widthKey?.value || 350;
        const heightValue = this.props.heightKey?.value || 450;
        const hiddenEmojisValue = this.props.hiddenEmojisKey?.value || "";
        const reactionsDefaultOpenValue = this.props.reactionsDefaultOpenKey?.value || false;

        let allowExpandReactionsValue = true;
        if (this.props.allowExpandReactionsKey?.value !== undefined) {
            allowExpandReactionsValue = this.props.allowExpandReactionsKey.value;
        }

        const defaultStyleValue: CSSProperties = {
            position: "absolute",
            zIndex: 2
        };
        const StyleValue: CSSProperties = {
            ...this.props.style,
            ...defaultStyleValue
        };

        return (
            <EmojiPickerComponent
                openValue={openValue}
                autoFocusSearch={autoFocusSearchValue}
                ThemeValue={this.convertStringToThemeExport(themeValue)}
                emojiStyleValue={this.convertStringToemojiStyle(emojiStyleValue)}
                defaultSkinTone={this.convertStringTodefaultSkinTone(defaultSkinToneValue)}
                lazyLoadEmojis={lazyLoadEmojisValue}
                PreviewConfig={this.convertStringToPreviewConfig(previewConfig)}
                searchPlaceholder={searchPlaceholderValue}
                suggestedEmojisMode={this.convertStringTosuggestedEmojisMode(suggestedEmojisModeValue)}
                skinTonesDisabled={skinTonesDisabled}
                searchDisabled={searchDisabled}
                skinTonePickerLocation={this.convertStringToskinTonePickerLocation(skinTonePickerLocation)}
                emojiVersion={emojiVersion}
                className={ClassName}
                widthValue={this.convertWidthValue(widthValue)}
                heightValue={this.convertWidthValue(heightValue)}
                hiddenEmojisValue={this.convertStringToArray(hiddenEmojisValue)}
                reactionsDefaultOpenValue={reactionsDefaultOpenValue}
                allowExpandReactions={allowExpandReactionsValue}
                style={StyleValue}
                onEmojiClick={this.onEmojiClickHandle}
                onSkinToneChange={this.onSkinToneChangeHandle}
            />
        );
    }

    private onEmojiClick(onEmojiClick: boolean, onEmojiClickedData: string): void {
        this.props.onEmojiClickedDataKey?.setValue(onEmojiClickedData);
        if (onEmojiClick && this.props.onEmojiClick && this.props.onEmojiClick.canExecute) {
            this.props.onEmojiClick.execute();
        }
    }

    private onSkinToneChange(onSkinToneChange: boolean, onSkinToneChangedData: string): void {
        this.props.onSkinToneChangedDataKey?.setValue(onSkinToneChangedData);
        if (onSkinToneChange && this.props.onSkinToneChange && this.props.onSkinToneChange.canExecute) {
            this.props.onSkinToneChange.execute();
        }
    }
}
