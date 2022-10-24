import {FC, memo} from 'react';

import {TimelineItem2} from '../../../data/dataDef';

const TimelineItem2: FC<{item: TimelineItem2}> = memo(({item}) => {
  const {title, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {content}
    </div>
  );
});



TimelineItem2.displayName = 'TimelineItem1';
export default TimelineItem2;
