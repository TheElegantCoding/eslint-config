type ConfigurationOption = {
  readonly yml?: boolean;
  readonly html?: boolean;
  readonly json?: boolean;
  readonly regex?: boolean;
  readonly solid?: boolean;
  readonly astro?: boolean;
  readonly ignore?: string[];
  readonly tailwind?: boolean;
  readonly stylistic?: boolean;
  readonly typescript?: boolean;
};

export type { ConfigurationOption };