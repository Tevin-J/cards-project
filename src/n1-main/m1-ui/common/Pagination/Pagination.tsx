import React, { useState } from 'react';
import styles from './Pagination.module.css';


type OwnProps = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: () => void
    blockSize: number
}
type PropsType = OwnProps

const Pagination: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

        let blockCount = Math.ceil(pagesCount / props.blockSize);
        let [blockNumber, setBlockNumber] = useState(1);
        let leftBlockPageNumber = (blockNumber - 1) * props.blockSize + 1;
        let rightBlockPageNumber = blockNumber + props.blockSize;

        return <div className={styles.pagination}>
            { blockNumber > 1 &&
            <button onClick={ () => {setBlockNumber(blockNumber - 1) }}>PREV</button>}

            {pages.filter(p => p >= leftBlockPageNumber && p <= rightBlockPageNumber)
                .map(p => {
                    return <span
                        /*className={
                        ({
                        [styles.selectedPage] : props.currentPage ===p
                    }, styles.pageNumber) }*/
                                 key={p}
                                 /*onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}*/
                    >{p}</span>
                })}
            {blockCount > blockNumber &&
            <button onClick={ () => {setBlockNumber(blockNumber + 1) }}>NEXT</button>}
        </div>
    };

export default Pagination;