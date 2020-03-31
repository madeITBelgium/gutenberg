/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { GlobalStylesPanelBody } from '../global-styles-panel-body';
import { useGlobalStylesState } from '../store';

export default function TypographyControls() {
	const {
		fontSize,
		fontScale,
		lineHeight,
		fontWeight,
		setStyles,
	} = useGlobalStylesState();

	return (
		<GlobalStylesPanelBody
			title={ __( 'Typography' ) }
			initialOpen={ false }
		>
			<RangeControl
				label={ __( 'Font Size' ) }
				value={ fontSize }
				min={ 10 }
				max={ 30 }
				step={ 1 }
				onChange={ ( value ) => setStyles( { fontSize: value } ) }
			/>
			<RangeControl
				label={ __( 'Font Scale' ) }
				value={ fontScale }
				min={ 1.1 }
				max={ 1.4 }
				step={ 0.025 }
				onChange={ ( value ) => setStyles( { fontScale: value } ) }
			/>
			<RangeControl
				label={ __( 'Line Height' ) }
				value={ lineHeight }
				min={ 1 }
				max={ 2 }
				step={ 0.1 }
				onChange={ ( value ) => setStyles( { lineHeight: value } ) }
			/>
			<RangeControl
				label={ __( 'Font Weight' ) }
				value={ fontWeight }
				min={ 100 }
				max={ 900 }
				step={ 100 }
				onChange={ ( value ) => setStyles( { fontWeight: value } ) }
			/>
		</GlobalStylesPanelBody>
	);
}
