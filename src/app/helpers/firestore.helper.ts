import {AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Persistable} from '../models/persistable';

export class FirestoreHelper {

  static getItems<T extends Persistable>(collection: AngularFirestoreCollection<T>): Observable<T[]> {
    return collection.snapshotChanges()
      .map(changes => changes.map(a => {
        const data = a.payload.doc.data() as T;
        data.id = a.payload.doc.id;

        return data;
      }));
  }

  static getItem<T extends Persistable>(id: string, collection: AngularFirestoreCollection<T>): Observable<T> {
    return collection.doc<T>(`/${id}`).snapshotChanges()
      .map(change => {
        const item = change.payload.data() as T;
        item.id = change.payload.id;
        return item;
      });
  }

  static createItem<T extends Persistable>(item: T, collection: AngularFirestoreCollection<T>) {
    collection.add(item);
  }

  static deleteItem<T extends Persistable>(item: T, collection: AngularFirestoreCollection<T>) {
    collection.doc(item.id).delete();
  }

  static deleteItemById<T extends Persistable>(id: string, collection: AngularFirestoreCollection<T>) {
    collection.doc(id).delete();
  }

  static updateItem<T extends Persistable>(item: T, update: Partial<T>, collection: AngularFirestoreCollection<T>) {
    collection.doc(item.id).update(update);
  }

  static updateItemById<T extends Persistable>(id: string, update: Partial<T>, collection: AngularFirestoreCollection<T>) {
    collection.doc(id).update(update);
  }
}
