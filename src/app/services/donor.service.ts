import {Injectable} from '@angular/core';
import {Donor} from '../models/donor';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {FirestoreHelper} from '../helpers/firestore.helper';
import {environment} from '../../environments/environment';

@Injectable()
export class DonorService {

  collection: AngularFirestoreCollection<Donor>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection<Donor>(environment.collectionName);
  }

  getDonors(): Observable<Donor[]> {
    return FirestoreHelper.getItems(this.collection);
  }

  getDonor(id: string): Observable<Donor> {
    console.log(FirestoreHelper.getItem(id, this.collection));
    return FirestoreHelper.getItem(id, this.collection);
  }

  deleteDonor(donor: Donor) {
    FirestoreHelper.deleteItem(donor, this.collection);
  }

  updateDonor(donor: Donor, update: Partial<Donor>) {
    FirestoreHelper.updateItem(donor, update, this.collection);
  }

  createDonor(donor: Donor) {
    FirestoreHelper.createItem(donor, this.collection);
  }
}
