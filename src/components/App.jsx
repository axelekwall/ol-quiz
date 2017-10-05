import React from 'react';
import {css, StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'gray',
    width: '100%',
  },
});

export default function App({children}) {
  return (
    <div>
      <div className={css(styles.navBar)}>
        This is where your navbar could go. This is styled with Aphrodite.
      </div>
      {children}
    </div>
  );
}
