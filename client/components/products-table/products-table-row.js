import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import TableRow from 'client/components/table/table-row';
import TableCell from 'client/components/table/table-cell';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal, { ModalContent, ModalTrigger } from 'client/components/modal/modal';
import Button from 'client/components/button/button';

// Styles
import styles from 'client/components/products-table/products-table.scss';
import useStyles from 'isomorphic-style-loader/useStyles';

// Constants
import IMAGES from 'client/constants/image-constants';

const ProductsTableRow = ({ handleDeleteProduct, product }) => {
  useStyles(styles);
  const iconClasses = classNames(styles.Cell, styles.Icons);
  const primaryImageUrl = product.getPrimaryImageUrl();

  return (
    <React.Fragment>
      <TableRow
        hover
        className={styles.ProductsTableRowContainer}
      >
        <TableCell className={styles.Cell}>
          <img
            className={styles.TableImage}
            src={IMAGES.getFullUrl(primaryImageUrl)}
          />
        </TableCell>
        <TableCell className={styles.Cell}>
          <span className={styles.Text}>{product.getTitle()}</span>
        </TableCell>
        <TableCell className={styles.Cell}>
          <span className={styles.Text}>${product.getPrice().toFixed(2)}</span>
        </TableCell>
        <TableCell className={styles.Cell}>
          <span className={styles.Text}>${product.getShippingPrice().toFixed(2)}</span>
        </TableCell>
        <TableCell className={styles.Cell}>
          <span className={styles.Text}>{product.getIncludeShippingInPrice() ? 'Yes' : 'No'}</span>
        </TableCell>
        <TableCell className={styles.Cell}>
          <span className={styles.Text}>${product.getFinalPrice().toFixed(2)}</span>
        </TableCell>
        <TableCell className={iconClasses}>
          <div className={styles.Icons}>
            <Link to={`/admin-product/${product.getId()}`}>
              <FontAwesomeIcon
                icon={faEdit}
                className={styles.ActionIcon}
              />
            </Link>
          </div>
          <Modal>
            <ModalTrigger>
              {({ hide, show }) => {
                return <FontAwesomeIcon
                  onClick={() => show()}
                  icon={faTrash}
                  className={styles.ActionIcon}
                       />;
              }}
            </ModalTrigger>
            <ModalContent>
              {({ hide }) => {
                return (
                  <div className={'flex flex-dir-col'}>
                    Are you sure you want to delete this product?
                    <div className="mt-4 flex ">
                      <Button danger>Yes</Button>
                      <Button onClick={hide}>Cancel</Button>
                    </div>
                  </div>
                );
              }}
            </ModalContent>
          </Modal>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

ProductsTableRow.propTypes = {
  product: PropTypes.object,
  handleDeleteProduct: PropTypes.func,
};

export default ProductsTableRow;
