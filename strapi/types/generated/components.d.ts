import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
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
    displayName: 'FooterGroup';
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
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    icon: Schema.Attribute.Media<'images'>;
    iconPosition: Schema.Attribute.Enumeration<['LEFT', 'RIGHT']> &
      Schema.Attribute.DefaultTo<'LEFT'>;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isUnderlined: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    showIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    showLabel: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']> &
      Schema.Attribute.DefaultTo<'PRIMARY'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.footer-group': LayoutFooterGroup;
      'layout.header': LayoutHeader;
      'shared.link': SharedLink;
    }
  }
}
