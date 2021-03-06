import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public idPostagem: number;
  public titulo: string;
  public texto: string;
  public date: Date;
  public foto: string;
  public usuario: Usuario;
  public tema: Tema;
}
