<?php
 return array (
  'name' => 'lorem',
  'label' => 'Lorem',
  '_id' => 'lorem5aa06bae270e0',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'ipsum',
      'label' => '',
      'type' => 'repeater',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'type' => 'text',
            'label' => 'Name',
          ),
          1 => 
          array (
            'type' => 'html',
            'label' => 'Html Code',
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    1 => 
    array (
      'name' => 'rating',
      'label' => '',
      'type' => 'rating',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'mininmum' => 0,
        'maximum' => 5,
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    2 => 
    array (
      'name' => 'name',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'collection',
      'label' => '',
      'type' => 'collectionlink',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'link' => 'careerStages',
        'multiple' => false,
        'display' => 'comapny',
        'limit' => false,
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    4 => 
    array (
      'name' => 'set',
      'label' => '',
      'type' => 'set',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'name' => 'name',
            'type' => 'text',
          ),
          1 => 
          array (
            'name' => 'about',
            'type' => 'html',
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
  ),
  'template' => '',
  'data' => 
  array (
    'ipsum' => 
    array (
      0 => 
      array (
        'field' => 
        array (
          'type' => 'text',
          'label' => 'Name',
        ),
        'value' => 'Testname',
      ),
    ),
  ),
  '_created' => 1520462766,
  '_modified' => 1520465410,
  'description' => '',
  'acl' => 
  array (
  ),
);