<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'color950');

/** MySQL database username */
define('DB_USER', 'color950');

/** MySQL database password */
define('DB_PASSWORD', 'Onecafe45!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'P=nIRgfXKw?L:uC:K59o[JPRJq` C&V0/afK05cSy.fn@yM2/gm~!IfP&qx8z4dP');
define('SECURE_AUTH_KEY',  'pWSb0:Q$/q5&}$+qazpB[+N8=1d1s]bk:~6rqH{TdR!!xCs5%?wFt6o5-uGTJZ0z');
define('LOGGED_IN_KEY',    '}Tz>~~I!=O5@#e|!#S6+ku=Lt>=t)c~ |K2Y5yTY&0[2dYWRso5mtLER1;:YQxZ>');
define('NONCE_KEY',        '(mocRxs!f{`p,H(lbMRn5Z}wwsCyP>&TwtT,d1*9?F&?Sf!V0EkIO,|0jKdJp]w2');
define('AUTH_SALT',        'J(/U}4oY6Ub[?4c&(PM>eT}6?/LnH1YQd0#3KhjzE-/c3<d|GW?7 SdLkS0f9^O!');
define('SECURE_AUTH_SALT', 'r!;4C$KV+b2pk)hujyVw(gY-[7j<V3Dj0d-}F!@ J?<n^EpP8ja7x0aB_&Va4nLk');
define('LOGGED_IN_SALT',   'n.7&7yVQ.yY$#!77 QsMwj}YsWnKD{ESQkxGgn2}0cs0UD{3bSM8p6cjqusN+ONI');
define('NONCE_SALT',       'SGP!p40]8H2XsiukbA0HD:2L]m<oWN[(t1a:~z5&1di/Whl4hA=zd88&&U8P9 j3');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
