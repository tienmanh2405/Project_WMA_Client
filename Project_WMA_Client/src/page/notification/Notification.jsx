import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import HeaderLogin from '../../components/header/Header_login';
import OffcanvasExample from '../../components/offcanvas/offcanvas';
import './Notification.css';
import Footer from '../../components/footer/Footer';

const count = 4;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const NotificationPage = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      list.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = list.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <>
      <HeaderLogin />
      <div className="container-fluid">
        <div className="row">
          <div style={{ display: 'flex', alignContent: 'center', margin: '20px 0' }}>
            <OffcanvasExample />
            <span className="page_title">Notification</span>
          </div>
          <div className="row">
            <div className="col-6 form_page-notification">
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                  <List.Item
                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                  >
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={<a href="https://ant.design">{item.name?.last}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                      <div>content</div>
                    </Skeleton>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotificationPage;
