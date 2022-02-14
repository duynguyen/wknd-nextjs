import React, { Component } from 'react';
import { withMappable } from '@adobe/aem-react-editable-components';

const NEXT_PUBLIC_AEM_HOST = process.env.NEXT_PUBLIC_AEM_HOST;
const NEXT_PUBLIC_AEM_SITE = process.env.NEXT_PUBLIC_AEM_SITE;

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    },
    resourceType: `editorxpdevelopment/components/content/text`
};

export default class Image extends Component {
    get content() {
        return <img
                className="Image-src"
                src={NEXT_PUBLIC_AEM_HOST + this.props.src}
                alt={this.props.alt}
                title={this.props.title ? this.props.title : this.props.alt} />;
    }

    render() {
        if(ImageEditConfig.isEmpty(this.props)) {
            return null;
        }
        return (
            <div className="Image">
                {this.content}
            </div>
        );
    }
}

export const AEMImage = withMappable(Image, ImageEditConfig);