import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Icon, Whisper } from 'rsuite';

const Overlay = React.forwardRef(({ style, onClose, ...rest }, ref) => {
    const styles = {
      ...style,
      background: '#fff',
      width: 200,
      padding: 10,
      borderRadius: 4,
      position: 'absolute',
      border: '1px solid #ddd',
      boxShadow: '0 3px 6px -2px rgba(0, 0, 0, 0.6)'
    };
  
    return (
      <div {...rest} style={styles} ref={ref}>
        Overlay
        <hr />
        <button onClick={onClose}>close</button>
      </div>
    );
  });
  
  const UploaderWidget = () => (
    <Whisper
      trigger="click"
      speaker={(props, ref) => {
        const { className, left, top, onClose } = props;
        return <Overlay style={{ left, top }} onClose={onClose} className={className} ref={ref} />;
      }}
    >
      <Icon className="uploadIcon" icon="upload" />
      
    </Whisper>
  );

  export default UploaderWidget;