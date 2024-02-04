/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IT {
  title: string;
}

class Component <T> {
  constructor (public props:T) {}
}

class Page extends Component <IT>{
  pageInfo () {
    console.log(this.props.title);
  }
}

const a = new Page({ title: 'Sea' });
a.pageInfo();

export {};