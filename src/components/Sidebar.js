import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Heim', href: 'intro' },
        { content: 'Hvat og hvussu', href: 'one' },
        { content: 'Um #rita1tíma', href: 'two' },
        { content: 'Skráset flokkin', href: 'three' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <Scroll type="id" element={href}>
                      <a href={`#${href}`}>{content}</a>
                    </Scroll>
                  </li>
                );
              })}
            </Scrollspy>
          </nav>
        </div>
      </section>
    );
  }
}

export default Sidebar;
