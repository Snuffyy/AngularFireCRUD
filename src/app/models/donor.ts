import {Persistable} from './persistable';

export interface Donor extends Persistable {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  total?: number;
}

export const EMPTY_DONOR: Donor = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  total: 0
};
