import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
    icon: 'code';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LayoutContactForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'envelop';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'code';
  };
  attributes: {
    copyrightText: Schema.Attribute.Text;
    groups: Schema.Attribute.Component<'layout.footer-group', true>;
    logo: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface LayoutFooterGroup extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_groups';
  info: {
    displayName: 'Footer Group';
    icon: 'code';
  };
  attributes: {
    footerLinks: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    icon: 'code';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.link', false>;
    navLinks: Schema.Attribute.Component<'shared.link', true>;
    navPosition: Schema.Attribute.Enumeration<['LEFT', 'RIGHT', 'CENTER']> &
      Schema.Attribute.DefaultTo<'LEFT'>;
  };
}

export interface LayoutPageInformation extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_informations';
  info: {
    displayName: 'Featured Asset';
    icon: 'code';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
    model: Schema.Attribute.Relation<'oneToOne', 'api::model.model'>;
    tool: Schema.Attribute.Relation<'oneToOne', 'api::tool.tool'>;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    icon: 'hashtag';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    badgeType: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']> &
      Schema.Attribute.DefaultTo<'PRIMARY'>;
    hasBadge: Schema.Attribute.Boolean;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    buttonSize: Schema.Attribute.Enumeration<['SMALL', 'MEDIUM', 'LARGE']>;
    buttonStyle: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']> &
      Schema.Attribute.DefaultTo<'PRIMARY'>;
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    image: Schema.Attribute.Media<'images'>;
    imageOnRight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isUnderlined: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.banner': LayoutBanner;
      'layout.contact-form': LayoutContactForm;
      'layout.footer': LayoutFooter;
      'layout.footer-group': LayoutFooterGroup;
      'layout.header': LayoutHeader;
      'layout.page-information': LayoutPageInformation;
      'shared.heading': SharedHeading;
      'shared.link': SharedLink;
    }
  }
}
