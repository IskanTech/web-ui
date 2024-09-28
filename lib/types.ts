export interface Token {
	AccessToken: string

	// TokenType is the type of token.
	// The Type method returns either this or "Bearer", the default.
	TokenType: string

	// RefreshToken is a token that's used by the application
	// (as opposed to the user) to refresh the access token
	// if it expires.
	RefreshToken: string

	// Expiry is the optional expiration time of the access token.
	//
	// If zero, TokenSource implementations will reuse the same
	// token forever and RefreshToken or equivalent
	// mechanisms for that TokenSource will not be used.
	Expiry: Date

	// expiryDelta is used to calculate when a token is considered
	// expired, by subtracting from Expiry. If zero, defaultExpiryDelta
	// is used.
	expiryDelta: Number
}