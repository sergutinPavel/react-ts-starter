import React, { Component } from 'react';


interface IOwnProps {
  readonly [key: string]: any;
}
interface IOwnState {
  readonly [key: string]: any;
}

class HomePage extends Component<IOwnProps, IOwnState> {
  constructor(props: IOwnProps) {
    super(props);
    this.state = {
      example: true,
    };
  }

  componentDidMount(): void {
  }
  componentWillUnmount(): void {
  }

  render() {
    return (
      <div className={'app-layout__content'}>
        HomePage works, но это не точно.

        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda atque cupiditate dolores ea eos error est eveniet
          excepturi in iure magni nostrum perferendis possimus provident quaerat quis, rerum sapiente.</div>
        <div>Ea officia omnis praesentium quod temporibus. Exercitationem, odio, temporibus! Ab cupiditate illum impedit iusto magnam
          maiores nihil rerum saepe ullam voluptatum! Commodi corporis incidunt laborum nobis nulla repellendus sequi vel!
        </div>
        <div>Consequatur, esse nisi. Aut commodi consequuntur deleniti deserunt doloribus eos eum explicabo fugit in itaque iure magnam
          minima molestiae natus nisi nobis praesentium quasi, sapiente sed sunt tempora veniam veritatis!
        </div>
        <div>Adipisci aliquam aspernatur assumenda consequatur eveniet minima perferendis similique voluptatem. Ad commodi dolorem earum
          iusto laudantium necessitatibus temporibus? Accusamus aspernatur esse fuga inventore itaque nostrum possimus provident quos
          repudiandae soluta.
        </div>
        <div>Accusamus animi aspernatur, commodi consequuntur dolorum ducimus earum eligendi id maiores modi nihil officia officiis
          provident quam sapiente suscipit ullam veniam. Dicta libero quibusdam ratione soluta voluptatem! Exercitationem, impedit, unde!
        </div>
        <div>A aperiam distinctio dolor doloremque esse, in ipsam ipsum laboriosam maxime minima necessitatibus, nemo nesciunt odio officia
          quia ratione, recusandae similique sit soluta sunt tempora temporibus velit voluptatum! Nesciunt, repellendus.
        </div>
        <div>Accusantium error, expedita fugiat illum, ipsam ipsum minima, nemo omnis porro quo reprehenderit veritatis voluptatem
          voluptatum. Accusantium animi expedita harum laborum, modi pariatur rem. Cumque distinctio earum est rem ullam!
        </div>
      </div>
    );
  }
}

export default HomePage;
