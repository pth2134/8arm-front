/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * COMMERCE
 * COMMERCE REST API DOC
 * OpenAPI spec version: 1.0.0
 */
import type { Profile } from './profile';

export interface Member {
  createDate?: string;
  id?: number;
  imgUrl?: string;
  modifyDate?: string;
  name?: string;
  nickname?: string;
  password?: string;
  profile?: Profile;
  roles?: string[];
  username?: string;
}