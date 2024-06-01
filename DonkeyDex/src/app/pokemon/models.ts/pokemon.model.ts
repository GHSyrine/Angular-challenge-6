export interface Ability{
  ability:{
    name : string;
    url : string;
  };
  is_hidden: boolean;
  slot : number;
}
export interface Type{
  slot: number;
  type: {
    name: string;
    url: string;
  };

}
export interface Move{
  move :{
  name : string;
  url: string;
  };
}
export interface Stat{
  base_stat : number;
  effort : number;
  stat:{
    name: string;
    url: string;
  };
}

export interface Sprites{
  front_default : string;
  front_shiny : string;
  front_female : string;
  front_shiny_female : string;
  back_default : string;
  back_shiny : string;
  back_female : string;
  back_shiny_female : string;
}
export interface PokemonListResponse{
 count : number;
 next : string;
 previous : string;
 results :{
  name: string;
  url: string;
 }[]
}


export interface Pokemon {
  id : number;
  name : string;
  base_experience : number;
  height : number;
  weight : number;
  abilities : Ability[];
 moves : Move[];
  stats : Stat[];
  sprites : Sprites;
  types : Type[]
}
export interface EvolutionChain {
  id: number;
  baby_trigger_item: string | null;
  chain: EvolutionDetails;
}

export interface EvolutionDetails {
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
  evolves_to: EvolutionDetails[];
  evolution_details: {
    item: {
      name: string;
      url: string;
    } | null;
    trigger: {
      name: string;
      url: string;
    };
    gender: number | null;
    held_item: {
      name: string;
      url: string;
    } | null;
    known_move: {
      name: string;
      url: string;
    } | null;
    known_move_type: {
      name: string;
      url: string;
    } | null;
    location: {
      name: string;
      url: string;
    } | null;
    min_level: number | null;
    min_happiness: number | null;
    min_beauty: number | null;
    min_affection: number | null;
    needs_overworld_rain: boolean;
    party_species: {
      name: string;
      url: string;
    } | null;
    party_type: {
      name: string;
      url: string;
    } | null;
    relative_physical_stats: number | null;
    time_of_day: string;
    trade_species: {
      name: string;
      url: string;
    } | null;
    turn_upside_down: boolean;
  }[];
}

export interface PokemonSpecies{
  id : number;
  name : string;
  order : number;
  gender_rate : number;
  capture_rate : number;
  base_happiness : number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical : boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable : boolean;
  growth_rate: {
    name : string;
    url: string;
  };
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }[];
  egg_groups: {
    name: string;
    url: string;
  }[];
  color: {
    name: string;
    url: string;
  };
  shape: {
    name: string;
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  } | null;
  evolution_chain: {
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  } | null;
  generation: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
}

