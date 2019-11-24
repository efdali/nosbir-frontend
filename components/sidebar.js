import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../store/actions/groupActions';
import Loading from './loading';
import Error from './error';
const Sidebar = props => {
  const { groups, isLoading, isRejected, msg } = useSelector(
    state => state.groups,
  );

  const renderComponent = () => {
    if (isLoading) {
      return <Loading />;
    } else if (isRejected) {
      return <Error msg={msg} />;
    } else {
      return (
        <ul>
          {groups.map((g, i) => (
            <li key={i}>
              <Link href={g.group_seo}>
                <a>{g.name.toLowerCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  return (
    <aside className="left-sidebar">
      <h5>Kanallar</h5>
      {renderComponent()}
    </aside>
  );
};
export default Sidebar;
