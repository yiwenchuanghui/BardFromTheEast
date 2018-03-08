import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import AudioPlayer from '../../components/Global/AudioPlayer';
import NewsFeed from './NewsFeed';
import VideoFeed from './VideoFeed';
import ContactInfo from '../../components/Global/ContactInfo';
import '../../../assets/images/logo.png';

const NEWS_DATA = [
  {
    title: 'Winter festival in Beijing',
    date: 'December 20',
    text:
      '天猫为第三方交易平台及互联网信息服务提供者，天猫（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。天猫提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；天猫存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向天猫举报并提供',
  },
  {
    title: '北京元旦活动',
    date: 'December 31',
    text:
      '天猫为第三方交易平台及互联网信息服务提供者，天猫（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。天猫提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；天猫存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向天猫举报并提供',
  },
  {
    title: '北京元旦活动',
    date: 'December 31',
    text:
      '天猫为第三方交易平台及互联网信息服务提供者，天猫（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。天猫提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；天猫存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向天猫举报并提供',
  },
];

class HomePage extends Component {
  render() {
    return (
      <div>
      <div className="upper-wrapper">
        <div className="welcome">
          <div className="welcome-video">
            <video
              src="https://s3-ap-southeast-1.amazonaws.com/caci2017/BnW.mp4"
              autoPlay
              loop
              muted/>
            <div className="welcome-content">
              <div className="left">
                <span>WELCOME</span>
                <br />
                <strong>TO THE EVENT OF YOUR DREAMS</strong>
              </div>
              <div className="right">
                <h4>Event Productions - Weddings, design, catering, coordination, logistics. </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-wrapper">
        <div className="columns">
          <div className="column is-three-fifths">
            <NewsFeed data={NEWS_DATA} />
          </div>
          <div className="column music-box" style={{ position: 'relative' }}>
            <div className="player-wrapper">
            <h1>Our Music</h1>
            <AudioPlayer />
            </div>
          </div>
        </div>
        <div className="video">
          <VideoFeed />
        </div>
      </div>
      <div className="contact-info">
        <ContactInfo />
      </div>
    </div>
    );
  }
}

export default HomePage;
