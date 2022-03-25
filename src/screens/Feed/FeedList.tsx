import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import { useTranslation } from "react-i18next";
import FeedItem from './FeedItem'
import { Mission } from '../../@types/feeds'
import 'moment/locale/es'

const FeedList = ({ feeds }: { feeds: [Mission] }) => {
  const { i18n } = useTranslation();

  // Grouping feeds by Date
  moment.locale(i18n.language);
  const monthName = (item: Mission) => moment(item.date.toString(), 'YYYY-MM-DD').format('DD MMMM YYYY');
  const groupedFeeds = _.groupBy(feeds, monthName);

  return (<>
    {Object.keys(groupedFeeds).map((date, i) => (
      <div key={i} className='product-group'><h1>{date}</h1>
        {groupedFeeds[date].map((feed: Mission, index: number) => <FeedItem key={index} feed={feed} />)}
      </div>)
    )}
  </>)
}

export default FeedList