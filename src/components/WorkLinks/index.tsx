import React from 'react';
import Link from '../ui/Link/index';

import './style.scss';

interface WorkLinksProps {
  demo?: string;
  repo?: string;
  design?: string;
}

const WorkLinks:React.FC<WorkLinksProps> = ({ demo, repo, design }) => {
  return (
    <ul className="WorkLinks">
      {
        demo &&
        <li>
          <Link href={demo} />
        </li>
      }
      {
        repo &&
        <li>
          <Link href={repo} />
        </li>
      }
      {
        design &&
        <li>
          <Link href={design} />
        </li>
      }
  </ul>
  );
};

export default WorkLinks;